import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSection() {
  const data: IBlog[] = await getBlogs();
  return (
    <section id="blog" className="py-36 bg-slate-100">
      <div className="container mx-auto border">
        <h1 className="text-center font-bold text-3xl lg:text-6xl mb-5">
          Our Articles
        </h1>
        <div className="flex flex-wrap justify-center items-center lg:justify-start ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col group rounded-xl shadow-lg m-5 border bg-white border-slate-300 overflow-hidden w-[450px] h-[600px]"
              >
                <div className="relative">
                  <div className="absolute font-semibold left-5 mt-5 bg-white bg-opacity-90 rounded-full px-3 text-slate-800">
                    {item.fields.category}
                  </div>
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt="thumbnail"
                    width={1000}
                    height={1000}
                    className="object-cover lg:group-hover:scale-105 h-[400px]"
                  />
                </div>

                <div className="mx-5 mt-2">
                  <div className="font-bold text-xl lg:text-2xl">
                    {item.fields.title}
                  </div>
                </div>

                <div className="flex flex-row items-center mx-5 mt-2">
                  <Image
                    src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                    alt="avatar"
                    width={1000}
                    height={1000}
                    className="w-[50px] max-h-[50px] rounded-full border border-slate-500"
                  ></Image>

                  <div>
                    <div className="font-bold text-gray-600 text-lg mx-2">
                      {item.fields.author.fields.name}
                    </div>
                    <div className="font-semibold text-gray-500 text-lg mx-2">
                      {item.fields.author.fields.email}
                    </div>
                  </div>
                </div>

                <div className="flex mx-5 mt-3">
                  <Link
                    href={`/blog/${item.fields.slug}`}
                    className="bg-teal-500 rounded-full px-5 py-2 text-white hover:bg-teal-600 font-bold focus:outline-none focus:ring-2 focus:ring-slate-700"
                  >
                    Read More
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
