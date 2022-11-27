import {useParams} from 'react-router-dom';

const BlogDetails = () => {

    const {id}=useParams();

    return ( 
        <div className="blog-details">
            <h2>Yazı Detayı</h2>
            <p>{id}</p>
        </div>
     );
}
 
export default BlogDetails;