import { IBlog } from "@/types/blog";
import Link from "next/link";

export default function RecomendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div>
      <div className="font-semibold mb-2 text-lg">Read more our articles:</div>
      <div>
        {blogs.map((item, index) => {
          return (
            <ul key={index} className="list-disc my-1">
              <li>
                <Link
                  href={`/blog/${item.fields.slug}`}
                  target="_blank"
                  className="underline underline-offset-2 lg:hover:text-teal-500"
                >
                  {item.fields.title}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
