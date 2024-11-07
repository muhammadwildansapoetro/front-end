import { getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

export const generateStaticParams = async () => {
  const contents: IBlog[] = await getBlogs();

  return contents.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-5">{children}</p>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-disc ml-5">{children}</ol>
      ),
    },
  };

  return (
    <div className="py-20 lg:mx-80">
      <div className="container mx-auto">
        <div className="flex flex-col items-start mx-5">
          <div className="font-semibold text-lg lg:text-xl text-slate-500">
            {blog.fields.category}
          </div>

          <h1 className="font-bold text-3xl lg:text-6xl text-slate-800">
            {blog.fields.title}
          </h1>

          <Image
            src={`https:${blog.fields.thumbnail.fields.file.url}`}
            alt="thumbnail"
            width={1000}
            height={1000}
            className="my-5"
          />

          <div className="font-semibold text-lg lg:text-xl text-slate-700">
            By {blog.fields.author.fields.name}
          </div>

          <div className="text-slate-500 lg:text-lg font-semibold">
            Updated {blog.fields.date}
          </div>

          <div className="my-5 lg:mx-40 text-justify">
            {documentToReactComponents(blog.fields.content, options)}
          </div>
        </div>
      </div>
    </div>
  );
}
