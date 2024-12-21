import React, { createContext, useState, useContext } from "react";

const BlogContext = createContext<any>(null);

export const BlogProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<any[]>([]);

  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
