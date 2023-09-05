import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Landing from './pages/landing';
import Products from './pages/products';
import Single from './pages/single';
import Checkout from './pages/checkout';
import Adminorders from './pages/adminorders';
import Admininventory from './pages/admininventory';
import Navbars from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbars />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Landing />} />
          <Route path='/products' element={<Products />} />
          <Route path='/single' element={<Single />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/adminorders' element={<Adminorders />} />
          <Route path='/admininventory' element={<Admininventory />} />
        </Routes>
    </div>
  );
}

export default App;
