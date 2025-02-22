import React from "react";
import usePosts from "@/features/blog/hooks/usePosts";
import { Post } from "@/features/blog/types/types";
import PostCard from "@/features/blog/components/PostCard";

function PostList() {
  const { posts, loading } = usePosts();

  if (loading) {
    return "読み込み中...";
  }

  if (!loading && !posts) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <ul className="space-y-4">
      {posts.map((post: Post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;
