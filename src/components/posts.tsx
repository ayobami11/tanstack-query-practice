import { PostList } from "@/components/post-list";
import { fetchPosts } from "@/lib/api";
import { PaginationWithLinks } from "./ui/pagination-with-links";

interface PostsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const Posts = async ({ searchParams }: PostsProps) => {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const postsPerPage = parseInt((searchParams.pageSize as string) || "5");

  const { posts, totalPosts } = await fetchPosts(currentPage, postsPerPage);

  return (
    <div>
      <PostList posts={posts} />
      <div className="mt-8">
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPosts}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 15, 20]
          }}
        />
      </div>
    </div>
  );
};
