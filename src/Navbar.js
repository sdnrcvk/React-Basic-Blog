import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1>Blog</h1></Link>
            <div className="links">
                <Link to="/">Ana Sayfa</Link>
                <Link to="/create" style={{
                    color:'white',
                    backgroundColor:'#bd3aa8fd',
                    borderRadius:'8px'
                }}>Yeni Yazı</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;