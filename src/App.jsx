/* eslint-disable no-unused-vars */
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Product from "./components/Product"
import Blog from "./components/Blog"

export default function App(){
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}