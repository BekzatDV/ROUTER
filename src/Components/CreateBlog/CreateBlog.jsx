import React from "react";
import "./CreateBlog.css";

const CreateBlog = () => {
  return (
    <div className="block">
      <h2 className="create">Create blog</h2>
      <input type="text" placeholder="Name of blog" />
      <input type="text" placeholder="Category of blog" />
      <input type="text" placeholder="Description of blog" />
      <button>Post</button>
    </div>
  );
};

export default CreateBlog;
