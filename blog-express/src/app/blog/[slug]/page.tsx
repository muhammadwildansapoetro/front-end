import { getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function BlogContent({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return (
    <div className="mx-5 mt-5 flex flex-col items-center lg:mx-96 lg:mt-40">
      <h1 className="text-2xl font-bold lg:text-3xl">{blog.title}</h1>
      <div>{blog.category}</div>
      <Image
        src={`${blog.image}`}
        alt="image"
        width={500}
        height={500}
        className="lg:w-full"
      />
      <div>{blog.user.username}</div>
      <div>{documentToReactComponents(JSON.parse(blog.content))}</div>
    </div>
  );
}
