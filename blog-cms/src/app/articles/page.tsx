import { getBlogs } from "@/libs/blog";
import { IBlog } from "@/types/blog";

export default async function Article() {
  const data: IBlog[] = await getBlogs();
  return (
    <div>
      <div></div>
    </div>
  );
}
