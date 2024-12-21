import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, fetchPosts } from "../services/blogService";

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    getPosts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id)); // Update state after delete
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/add-post">Add New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/edit-post/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
