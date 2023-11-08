import React from "react";
import { Link } from "react-router-dom";
export default function BlogList({ blogs, title }) {
  return (
    <div>
      <div className="home">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <Link style={{
              textDecoration:"none",
              color:"black"
            }} to={`/blogs/${blog.id}`}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <h5>{blog.author}</h5>
          
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
