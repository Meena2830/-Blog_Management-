import React from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { createPost } from "../services/blogService";

const AddPost: React.FC = () => {
  const navigate = useNavigate();

  const handleCreatePost = async (newPost: any) => {
    await createPost(newPost);
    navigate("/"); // Redirect to home page after adding a post
  };

  return (
    <div>
      <h1>Add a New Post</h1>
      <BlogForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default AddPost;
