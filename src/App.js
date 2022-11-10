
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import GrandPa from './Component/GrandaPa/GrandPa';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>} ></Route>
        <Route path='/grandPa' element={<GrandPa></GrandPa>} ></Route>

        <Route path='*' element={<NotFound></NotFound>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
