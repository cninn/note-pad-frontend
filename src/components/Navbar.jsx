import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
      <div className="navbar">
        <img style={{
          width:"60px"
        }} src="/note.png" alt="..." />
        <h2>Not-la</h2>
        <div className="links">
          <Link to="/"><i className="fa-solid fa-house"></i></Link>
          <Link to="/create"><i className="fa-solid fa-square-plus"></i></Link>
        </div>
      </div>
  
  );
}
