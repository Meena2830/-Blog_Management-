import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { fetchPostById, updatePost } from "../services/blogService";

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the post data when the component loads
  useEffect(() => {
    const loadPost = async () => {
      try {
        if (id) {
          const data = await fetchPostById(Number(id)); // Ensure `id` is number
          setPost(data);
        }
      } catch (error) {
        console.error("Error fetching the post:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  const handleUpdatePost = async (updatedPost: any) => {
    if (id) {
      try {
        await updatePost(Number(id), updatedPost); // Use `Number(id)`
        navigate("/"); // Redirect to home page after updating
      } catch (error) {
        console.error("Failed to update post:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Edit Post</h1>
      <BlogForm onSubmit={handleUpdatePost} initialData={post} />
    </div>
  );
};

export default EditPost;
