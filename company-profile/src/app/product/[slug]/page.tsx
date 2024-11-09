import { getProducts, getProductSlug } from "@/libs/product";
import { IProduct } from "@/types/product";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const products: IProduct[] = await getProducts();

  return products.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product: IProduct = await getProductSlug(params.slug);

  return {
    title: product.fields.name,
    description: product.fields.tagline,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product: IProduct = await getProductSlug(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="mt-10 mb-2 text-2xl lg:text-2xl">{children}</h4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-lg lg:text-xl">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-5">{children}</ul>
      ),
    },
  };

  return (
    <div className="py-36">
      <div className="container mx-auto">
        <div className="mx-5 last:lg:mx-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-4xl font-semibold  text-slate-800 mb-2">
              {product.fields.name}
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-color1">
              {product.fields.tagline}
            </h2>

            <div className="lg:mx-56 my-10">
              <Link
                href={"https://wa.me/6285719960008"}
                target="_blank"
                className="lg:text-lg font-semibold rounded-full bg-color4 lg:hover:bg-[#f0bb03] shadow-lg px-7 py-3"
              >
                Order now
              </Link>
            </div>

            <Image
              src={`https:${product.fields.image.fields.file.url}`}
              alt={product.fields.name}
              width={1000}
              height={1000}
              className="rounded-lg w-[400px0 h-[200p]"
            />
            <div className="mt-10 lg:mx-56">
              {documentToReactComponents(product.fields.description, options)}
            </div>
          </div>

          <div className="flex justify-start lg:mx-56 mt-10">
            <Link
              href={"https://wa.me/6285719960008"}
              target="_blank"
              className="lg:text-lg font-semibold rounded-full bg-color4 lg:hover:bg-[#f0bb03] shadow-lg px-7 py-3"
            >
              Order now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
