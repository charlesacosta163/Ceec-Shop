import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faXmark, faShoppingCart, faHouse, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState, createContext, useEffect } from 'react'

import { Link } from 'react-router-dom'

const Navbar = ({ count, cart, handleRemoveItem }) => {
    const [nav, setNav] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        let total = 0;
      
        cart.forEach(e => {
          total += e.price;
        });
        const formattedTotal = parseFloat(total.toFixed(2));

        setCartTotal(formattedTotal);
    }, [cart]);
      

    const cartItems = cart.map((e, index) => {
        return (
            <div key={index} className="item rounded flex justify-between bg-green-100 p-[1rem] gap-[1rem]">

                <div className="image h-full flex-[1]">
                    <img src={e.image} alt="" className='h-full block' />
                </div>

                <div className="description flex flex-col items-start justify-between flex-[5]">
                    <span className='font-[600]'>{e.name}</span>
                    <span>${e.price}</span>
                </div>

                <button className='self-center' onClick={() => handleRemoveItem(index)}><FontAwesomeIcon icon = {faMinus} /></button>
            </div>
        )
    })

    return (
        <nav id='navbar-section' className="flex justify-between py-[1rem] px-[2rem] items-center fixed w-full top-0">

            <div id="logo" className="font-logoFont text-[2.5rem] font-bold tracking-wide text-accent">
                <Link to='/'>Ceec</Link>
            </div>

            <div id="menus" className={`${nav ? 'sm:flex-col' : 'sm:hidden'} sm:py-[2rem] sm:justify-evenly sm:fixed sm:right-[10px] sm:top-[90px] sm:rounded flex gap-[1.5rem] items-center rounded-full px-[2rem] py-[.75rem] bg-green-100 z-100`}>

                <Link to='/shop' onClick={() => setNav(prev => !prev)}>
                    <div id="menu-item" className='font-[700] text-white bg-green-500 px-[1rem] py-[.5rem] rounded'>
                        Shop
                    </div>
                </Link>

                <div id="menu-item" className='sm:hidden relative'>
                    <button onClick={() => setOpenCart(prev => !prev)}><FontAwesomeIcon icon={faShoppingCart} /></button>

                    {count > 0 && (
                        <span className='w-[18px] h-[18px] text-white rounded-full bg-rose-600 flex justify-center items-center text-[.75rem] absolute top-[-8px] right-[-10px]'>
                            {count}
                        </span>
                    )}</div>

            </div>

            <div id="hamburger" className="sm:flex sm:gap-[1rem] hidden">
                <div id="menu-item" className='relative'>
                    <button onClick={() => setOpenCart(prev => !prev)}><FontAwesomeIcon icon={faShoppingCart} /></button>
                    {count > 0 && (
                        <span className='w-[18px] h-[18px] text-white rounded-full bg-rose-600 flex justify-center items-center text-[.75rem] absolute top-[-8px] right-[-10px]'>
                            {count}
                        </span>
                    )}
                </div>

                <div id="menu-item">
                    <button onClick={() => setNav(prev => !prev)}>{ nav ? <FontAwesomeIcon icon={faXmark} className='text-2xl' /> : <FontAwesomeIcon icon={faBars} className='text-2xl' />}</button>
                </div>
            </div>

            <div id="cart-container" className={`${openCart ? 'flex' : 'hidden'} flex-col justify-between h-screen sm:w-full w-[400px] absolute right-0 top-0 bg-white p-[2rem]`}>

                <header className='flex justify-between items-center'>
                    <button onClick={() => setOpenCart(prev => !prev)}><FontAwesomeIcon icon={faX} className='text-[1.5rem]' /></button>
                    <span className='text-[2rem] font-[700]'>{count > 0 ? `Cart (${count})` : `Cart empty`}</span>
                </header>

                <main className='overflow-y-scroll flex-grow flex flex-col gap-[1rem] mt-4'>
                    {cartItems}
                </main>

                <Link to='./checkout'>
                    <button className='bg-black w-full text-white font-[500] py-[.5rem] px-[1rem] rounded' onClick={() => setOpenCart(prev => !prev)}>Checkout ${cartTotal}</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar