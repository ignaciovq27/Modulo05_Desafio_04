// css
import './App.css'

//components
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./MyContext";
import MyNavbar from './components/MyNavbar/MyNavbar';
import MyModal from "./components/MyModal/MyModal";

//views
import Home from './views/Home/Home';
import Pizza from './views/Pizza/Pizza';
import ShoppingCart from './views/ShoppingCart/ShoppingCart';
import NotFound from './views/NotFound/NotFound';

function App() {


  return (
    <div>
      <MyContext>
        <BrowserRouter>
          <MyNavbar />
          <MyModal />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContext>
    </div>
  )
}

export default App
