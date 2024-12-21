import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:5000/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const createPost = async (post: { title: string; content: string }) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const updatePost = async (id: number, updatedPost: any) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

export const deletePost = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/posts/${id}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
