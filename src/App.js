import Navbar from "./Navbar";
import Anasayfa from "./Home";

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
    <div className="App">
        <Navbar/>
      <div className="content">
        <Anasayfa/>
      </div>
    </div>
  );;
}

export default App;
