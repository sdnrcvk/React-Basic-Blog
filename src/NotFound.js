import { Link } from "react-router-dom";

const NotFound = () => {


    return ( 
        <>
        <div className="not-found">
            <h2 style={{color:"#bd3aa8fd"}}>Yanlış Sayfa</h2>
            <br></br>
            <p>Sayfa Bulunamadı!</p>
            <br></br>
            <Link to="/" style={{color:"#eb7420"}}>Ana Sayfa</Link>
        </div>
        
        </>
     );
}
 
export default NotFound;