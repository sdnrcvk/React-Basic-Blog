import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Anasayfa = () => {

    const [blogs,setBlogs]=useState([
        {
            ad:"Yeni Başlayanlar İçin C#",
            aciklama:"lorem ipsum",
            yazar:"luffy",
            id:1
        },
        {
            ad:"React Öğreniyorum",
            aciklama:"lorem ipsum",
            yazar:"zoro",
            id:2
        },        {
            ad:"İleri Seviye C#",
            aciklama:"lorem ipsum",
            yazar:"luffy",
            id:3
        },
        {
            ad:"MVC Öğreniyorum",
            aciklama:"lorem ipsum",
            yazar:"sanji",
            id:4
        }
    ])

    const [isim,setIsim]=useState('luffy');

    useEffect(()=>{
        console.log("useEffect çalıştı")
        console.log(blogs);
    },[blogs,isim])

    const handleClick=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList bloglar={blogs} baslik="Bütün Yazılar" handleClick={handleClick}/>
        <br></br>
        <button onClick={()=>setIsim('zoro')}>Değiştir</button>
        </div>
    );
}
 
export default Anasayfa;