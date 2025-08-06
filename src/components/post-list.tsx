import type { Post } from "@/lib/types";

interface PostListProps {
  posts: Post[];
}

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title} ({post.id - 1})</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
