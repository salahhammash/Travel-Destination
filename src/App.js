import logo from './logo.svg';
import './App.css';
import Home from './componentt/home/Home';
import { Routes, Route } from 'react-router-dom';

import Details from './componentt/TourDetails/TourDetails';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' element={<Details />}></Route>   {/*  its mean that the link well provide me with ../city/:(id)  */}

      </Routes>

    </div>
  );
}

export default App;
