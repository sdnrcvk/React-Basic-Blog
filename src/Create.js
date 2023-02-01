import React,{ useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const history=useHistory()
    const [baslik,setBaslik]=useState('')
    const [aciklama,setAciklama]=useState('')
    const [yazar,setYazar]=useState('')

    const[yukleniyor,setYukleniyor]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setYukleniyor(true);

        const yazi={ad:baslik,aciklama,yazar};

        fetch('http://localhost:8000/yazilar/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(yazi)
        }).then(()=>{
            console.log('yazı eklendi');
            setYukleniyor(false);

            //history.go(-1); geri tuşu gibi görev yapar
            history.push("/"); //path verdiğimiz sayfaya gidecek
        })
    }

    return ( 
        <div className="create">
            <h2 style={{color:'#bd3aa8fd'}}>Yeni Yazı Ekle</h2>
        <form onSubmit={handleSubmit}>
            <label>Yazı Başlık:</label>
            <input type="text" required value={baslik} onChange={(e)=>setBaslik(e.target.value)}/>
            <label>Yazı Açıklama:</label>
            <textarea required  value={aciklama} onChange={(e)=>setAciklama(e.target.value)}>

            </textarea>
            <label>Yazar:</label>
            <select value={yazar} onChange={(e)=>setYazar(e.target.value)}>
                <option value="Sedanur">Sedanur</option>
                <option value="Kaan">Kaan</option>
                <option value="Ceren">Ceren</option>
            </select>
            <button>Ekle</button> <br/>
            {baslik} <br/>
            {aciklama} <br/>
            {yazar}
        </form>
        
        </div>
     );
}
 
export default Create;