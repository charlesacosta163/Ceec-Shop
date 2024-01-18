// Home Page
import Navbar from "./Sections/Navbar"
import Footer from "./Sections/Footer"

import Body from "./Sections/Body"

// ROUTERS
import Shop from "./Sections/Shop"
import Checkout from "./Sections/Checkout"

import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from "react"

export const ShopContext = createContext()
export const CartContext = createContext()

function App() {
  const [numItems, setNumItems] = useState(0)
  const [cart, setCart] = useState([])

  function handleAddCart(id, newName, newPrice, newImage) {
      setCart([...cart, {
          id: id,
          name: newName,
          price: newPrice,
          image: newImage
      }])

      setNumItems(prev => prev + 1)
  }

  function handleRemoveFromCart(index) {
    const cartItems = cart.filter((_, i) => i !== index);
    setCart(cartItems);
    setNumItems(prev => prev - 1);
  }  

  return (
    <CartContext.Provider value = {{handleAddCart}}>
      <ShopContext.Provider value = {{numItems}}>
        <div className="font-mainFont w-full">
          <header id="navbar-wrapper w-full">
            <Navbar count = {numItems} cart = {cart} handleRemoveItem={handleRemoveFromCart}/>
          </header>
          
          <main className="">

            <Routes>

              <Route path="/" element = {<Body />} />
              <Route path="/shop" element = {<Shop />} />
              <Route path="/checkout" element = {<Checkout cartArray = {cart} handleRemoveItem = {handleRemoveFromCart} setCart = {setCart} setNumItems = {setNumItems}/>} />
              <Route path="*" element = {<div className="h-screen"><span>page not found</span></div>} />

            </Routes>

          </main>

          <section id="footer-wrapper" className="w-full flex justify-center px-[1rem] py-[4rem] bg-green-400">
              <Footer />
          </section>
        </div>
      </ShopContext.Provider>
    </CartContext.Provider>
  )
}

export default App
