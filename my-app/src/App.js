import './App.css';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Navbar from './Component/Navbar';

function App() {
  return (
     <>
   <Navbar title = "Diet Society"></Navbar>
  
  <div className="container">
        <Login></Login>
   </div>
  
   <Footer></Footer>

     </>
  );
}

export default App;
