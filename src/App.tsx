import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import BlogPost from "./components/BlogPost";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<BlogPost />} />{" "}
        {/* Add route for view */}
      </Routes>
    </Router>
  );
};

export default App;
