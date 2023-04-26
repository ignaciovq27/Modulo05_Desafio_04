// css
import './App.css'

//components
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContext } from "./MyContext";
import MyNavbar from './components/MyNavbar/MyNavbar';

//views
import Home from './views/Home/Home';
import Pizza from './views/Pizza/Pizza';
import ShoppingCart from './views/ShoppingCart/ShoppingCart';

function App() {
  const [count, setCount] = useState(0)

  const pollo = "Hola pollo ( °)> " + count

  return (
    <div>
      <MyContext>
        {/* <div>
          <h1>{pollo}</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count
          </button>
        </div> */}
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
          </Routes>
        </BrowserRouter>
      </MyContext>
    </div>
  )
}

export default App
