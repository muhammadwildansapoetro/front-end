import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const data: IBlog[] = await getBlogs();
  return (
    <section id="blog" className="pb-36">
      <div className="container mx-auto border border-blue-500">
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col rounded-lg shadow-lg my-5 border border-slate-300 max-w-sm max-h-sm overflow-hidden"
              >
                <Image
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  alt="thumbnail"
                  width={1000}
                  height={1000}
                  className="w-full"
                ></Image>
                <div className="p-1">
                  <div className="font-bold text-lg mx-2">
                    {item.fields.title}
                  </div>
                </div>

                <div className="flex flex-row items-center my-3 ">
                  <Image
                    src={`https:${item.fields.author.fields.avatar.fields.file.url}`}
                    alt="avatar"
                    width={1000}
                    height={1000}
                    className="w-[50px] h-[50px] rounded-full border border-slate-500 mx-3"
                  ></Image>

                  <div>
                    <div className="font-bold text-gray-600 text-lg">
                      {item.fields.author.fields.name}
                    </div>
                    <div className="font-semibold text-gray-500 text-lg">
                      {item.fields.author.fields.email}
                    </div>
                  </div>
                </div>
                <div className="flex mx-3 mb-3">
                  <button className="bg-teal-500 rounded-full px-5 py-2 text-white hover:bg-teal-600 font-bold">
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
