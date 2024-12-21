import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/blogService";

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        if (id) {
          setLoading(true);
          const fetchedPost = await fetchPostById(Number(id)); // ensure ID is correctly passed as number
          setPost(fetchedPost);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Error loading post data.");
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
