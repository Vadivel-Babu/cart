import { Route, Routes } from "react-router-dom"
import Cardlist from "./components/Cardlist"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Cartcontext from "./Context/Cartcontext"


function App() {
  

  return (
    <>
    <Cartcontext>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Cardlist />} />
      <Route path="/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </Cartcontext>
    </>
   
  )
}

export default App
