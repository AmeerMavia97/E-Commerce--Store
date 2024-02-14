import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AllProduct from '../../Screen/AllProduct/Allproduct'
import SingleProduct from '../../Screen/SingleProduct.jsx/SingleProduct'
import CardProduct from '../../Screen/CardProduct/CardProduct'
import Navbarss from '../../Components/Navbar'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Navbarss></Navbarss>

    <Routes>
        <Route path='/' element={<AllProduct/>}/>
        <Route path='singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='cardproduct' element={<CardProduct/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default Routing