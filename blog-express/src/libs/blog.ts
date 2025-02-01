import axios from "@/helpers/axios";

export const getBlogs = async () => {
  const { data } = await axios.get(`http://localhost:8000/api/blogs`);
  return data.blogs;
};

export const getBlogBySlug = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:8000/api/blogs/${slug}`);
  return data.blog;
};
