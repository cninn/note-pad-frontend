import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isPending,setIsPending] = useState(false)

const handleSubmit=(e)=>{
  e.preventDefault();
  const blog = {title,body};
  setIsPending(true)
  setTimeout(()=>{
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
     
      setIsPending(false)

    })
    window.location.assign('/')
  },2000)
  

}


  return (
    <div className="create">
      <h2>Yeni not ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>Not başlığı </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          required
        />
        <label>Not içeriği </label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        ></textarea>

        <button type="submit">{isPending ? 'Yükleniyor' : 'Yeni not ekle'}</button>
    
      </form>
    </div>
  );
}
