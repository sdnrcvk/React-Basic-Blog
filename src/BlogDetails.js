import {useParams,useHistory} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    const history=useHistory()
    const {id}=useParams();
    const {veri:blog,yukleniyor,hata}=useFetch('http://localhost:8000/yazilar/'+id);

    const handleDelete=()=>{
        fetch('http://localhost:8000/yazilar/'+id,{
            method:'DELETE'
        }).then(()=>{
            console.log('yazı silindi');
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {yukleniyor && <div>Yükleniyor...</div>}
            {hata && <div>{hata}</div>}
            {blog && (
                <article>
                    <h2>{blog.ad}</h2>
                    <p>Yazar: {blog.yazar}</p>
                    <div>{blog.aciklama}</div>
                    <button onClick={handleDelete}>Sil</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;