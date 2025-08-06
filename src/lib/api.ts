import { Post } from "@/lib/types";

export const fetchPosts = async (page: number, perPage: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${perPage}`
  );
  const posts: Post[] = await response.json();
  const totalPosts = parseInt(response.headers.get("X-Total-Count") || "0");

  return { posts, totalPosts };
};
