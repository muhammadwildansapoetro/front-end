import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSection() {
  const data: IBlog[] = await getBlogs();
  return (
    <section id="blog" className="py-36">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-3xl lg:text-6xl mb-5">
          Our Articles
        </h1>

        <div className="flex flex-wrap gap-x-[24px]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                data-cy="blog-item"
                className="flex flex-col group rounded-xl shadow-lg my-5 border bg-white border-slate-300 overflow-hidden mx-5 lg:mx-0 lg:w-[calc(33.33%-16px)]"
              >
                <div className="relative overflow-hidden aspect-square w-full">
                  <div className="absolute font-semibold left-5 mt-5 bg-white bg-opacity-90 rounded-full px-3 text-slate-800">
                    {item.fields.category}
                  </div>
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt="thumbnail"
                    width={1000}
                    height={1000}
                    className="object-cover lg:group-hover:scale-105"
                  />
                </div>

                <div className="mx-5 mt-2">
                  <div className="font-bold text-xl">{item.fields.title}</div>
                </div>

                <div className="flex flex-row items-center mx-5 mt-2">
                  <Image
                    src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                    alt="avatar"
                    width={1000}
                    height={1000}
                    className="w-[40px] max-h-[40px] rounded-full border border-slate-500"
                  ></Image>

                  <div>
                    <div className="font-bold text-gray-600 mx-2">
                      {item.fields.author.fields.name}
                    </div>
                    <div className="font-semibold text-gray-500 mx-2">
                      {item.fields.author.fields.email}
                    </div>
                  </div>
                </div>

                <div className="flex mx-5 mt-3 mb-5">
                  <Link
                    href={`/blog/${item.fields.slug}`}
                    className="bg-black rounded-full px-5 py-2 text-white font-bold lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-green-500 lg:hover:bg-opacity-70"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
