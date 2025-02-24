import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/features/blog/lib/constants";
import { Post } from "@/features/blog/types/types";

function usePost(id: string | undefined) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/posts/${id}`);
      const { post } = await res.json();
      setPost(post);
      setLoading(false);
    };
    fetcher();
  }, [id]);

  return { post, loading };
}

export default usePost;
