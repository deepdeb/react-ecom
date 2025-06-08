import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

import { useDispatch } from "react-redux"
import { setProducts } from './redux/productSlice'
import { mockData } from './assets/mockData'
import Order from './pages/Order'
import FilterData from './pages/FilterData'


function App() {
  const dispatch = useDispatch()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} ></Route>
        <Route path="/order" element={<Order order={order}/>} ></Route>
        <Route path="/filter-data" element={<FilterData />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
