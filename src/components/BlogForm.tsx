import React, { useState } from "react";

interface BlogFormProps {
  onSubmit: (post: any) => void;
  initialData?: any;
}

const BlogForm: React.FC<BlogFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content }); // Call parent function to handle submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Save Post</button>
    </form>
  );
};

export default BlogForm;
