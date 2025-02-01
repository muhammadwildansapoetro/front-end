import axios from "@/helpers/axios";

export const getBlogs = async () => {
  const { data } = await axios.get(`/blogs`);
  return data.blogs;
};

export const getBlogBySlug = async (slug: string) => {
  const { data } = await axios.get(`/blogs/${slug}`);
  return data.blog;
};
