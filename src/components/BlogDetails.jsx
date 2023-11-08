import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Error from "./messages/Error";
import Delete from "./messages/Delete";
import Loading from "./messages/Loading";
import { useState } from "react";
import {Link} from 'react-router-dom'



export default function BlogDetails() {
  const { id } = useParams();

  const [show,setShow]=useState(false);


  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = ()=>{
    setTimeout(()=>{
      fetch(`http://localhost:8000/blogs/${blog.id}`,{
        method:'DELETE',
      }).then(()=>{
       
        window.location.assign('/')
        
      })
    },2000)
    setShow(true);
  }


  return (
    <>
    <div className="blog-details">
      {isPending && <Loading />}
      {error && <Error />}
      {blog && (
        <div className="blog">
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <h5>{blog.author}</h5>
          <button onClick={handleDelete} className="delete-blog"><i className="fa-solid fa-trash"></i></button>
          <Link style={{
            color:"black",
            fontWeight:"600",
            alignSelf:"flex-end"

          }} to={'/'}>
          Notlara dön
          </Link>
        </div>
      )}
    </div>
   {show && <Delete/>}
    </>
  );
}
/*
    <div>
      
     
      







 
    </div> */
