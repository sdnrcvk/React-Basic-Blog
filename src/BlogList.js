import React from 'react'


export default function BlogList({bloglar,baslik,handleClick}) {

    return (
    <div className="blog-list">
    <h2 style={{color:'#ff793f'}}>{baslik}</h2>
    {bloglar.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.ad}</h2>
            <p>Yazının yazarı : {blog.yazar}</p>
            <button onClick={()=>handleClick(blog.id)}>Sil</button>
        </div>
    ))}
    </div>
  )
}
