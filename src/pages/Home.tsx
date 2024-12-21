import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../services/blogService";
import "../styles/Home.css";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  // Fetch posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    loadPosts(); // Reload posts after deletion
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/add-post">
        <button className="add-post-btn">Add New Post</button>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>

            <Link to={`/post/${post.id}`}>
              <button className="view-button">View</button>
            </Link>

            <Link to={`/edit-post/${post.id}`}>
              <button className="edit-btn">Edit</button>
            </Link>

            <button
              className="delete-btn"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
