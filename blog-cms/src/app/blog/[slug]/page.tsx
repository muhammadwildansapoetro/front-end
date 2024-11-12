import RecomendationBlog from "@/components/recomendation";
import ShareButton from "@/components/share";
import { getBlogRecom, getBlogs, getBlogSlug } from "@/libs/blog";
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
  const blogNe: IBlog[] = await getBlogRecom(params.slug);

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
    <div className="py-24 lg:mx-96">
      <div className="container mx-auto">
        <div className="flex flex-col items-start mx-10">
          <div className="font-semibold text-lg lg:text-xl text-teal-500 mb-2">
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
            className="my-5 rounded-lg"
          />

          <div className="font-semibold text-slate-800">
            By {blog.fields.author.fields.name}
          </div>

          <div className="text-slate-500 font-semibold">
            Updated {blog.fields.date}
          </div>

          <div className="my-5 text-left lg:text-justify">
            {documentToReactComponents(blog.fields.content, options)}
          </div>
        </div>

        <div className="mx-10">
          <ShareButton slug={blog.fields.slug} />
        </div>

        <div className="mx-10 mt-10">
          <RecomendationBlog blogs={blogNe} />
        </div>
      </div>
    </div>
  );
}
