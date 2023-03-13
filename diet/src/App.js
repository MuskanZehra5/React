
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login'
import Signup from './Components/Signup';
import Items from './Components/Items';
import Editprofile from './Components/Editprofile'
import Addremupd from './Components/Addremupd';
import Checkout from './Components/Checkout';

function App() {
  return (
  <div className="App">
      <Navbar title='Diet Society' ></Navbar>
      <div className='container'>
        <Checkout></Checkout>

      </div>
<Footer></Footer>
    </div>
  );
}

export default App;
