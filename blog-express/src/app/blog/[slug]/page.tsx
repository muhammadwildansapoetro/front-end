import { getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

export default async function BlogContent({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  console.log(blog);

  return (
    <div className="mx-5 my-20 mb-20 mt-10 flex flex-col items-start lg:mx-72">
      <Link href={"/"} className="font-bold">
        Back
      </Link>

      <h1 className="text-2xl font-bold lg:text-3xl">{blog.title}</h1>

      <div>Category: {blog.category}</div>

      <Image
        src={`${blog.image}`}
        alt="image"
        width={500}
        height={500}
        className="aspect-video object-cover lg:w-full"
      />
      <p>Author: {blog.user.username}</p>

      <div>{documentToReactComponents(blog.content)}</div>
    </div>
  );
}
