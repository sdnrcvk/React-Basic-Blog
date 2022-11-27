import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Anasayfa = () => {

    const {veri:blogs,yukleniyor,hata}=useFetch('http://localhost:8000/yazilar')

    return (  
        <div className="home">
            {hata && <div className="error">{hata}</div>}
            {yukleniyor && <div className="loading">Yükleniyor...</div>}
            {blogs && <BlogList bloglar={blogs} baslik="Bütün Yazılar"/>}
        </div>
    );
}
 
export default Anasayfa;