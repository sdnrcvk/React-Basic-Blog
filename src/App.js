import Navbar from "./Navbar";
import Anasayfa from "./Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

/*
const name="Sedanur";
const surname="Çevik";
const isLoggedIn=true;
*/

function App() {
 /* return (
   <>
   <h1>
    {isLoggedIn && ` Benim adım ${name}, soyadım ${surname} .`}
    {isLoggedIn ? ` Benim adım ${name}, soyadım ${surname} .` : `Giriş Yapmadınız!`}
   </h1>
    {!isLoggedIn && `Giriş Yapmadınız!`}
   </>
  );*/
  return(
    <Router>
      <div className="App">
          <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Anasayfa/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );;
}

export default App;
