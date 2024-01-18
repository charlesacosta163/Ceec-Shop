import { sectionWidth, showBorder } from "../styles"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faShoppingCart, faHouse, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

const Checkout = ({ cartArray, handleRemoveItem, setCart, setNumItems }) => {

    const [checkedOut, setCheckedOut] = useState(false)

    function getTotal() {
        let total = 0;

        cartArray.forEach(e => total += e.price)

        return total
    }

    function getTax() {
        return ((getTotal() * 1.06) - getTotal()).toFixed(2)
    }

    function clearArray() {
        setCart([])
        setNumItems(0)
    }

    const cartItems = cartArray.map((e, index) => {
        return (
            <div key={index} className="item rounded flex justify-between bg-green-100 p-[1rem] gap-[1rem]">
    
                <div className="image h-full flex-[1]">
                    <img src={e.image} alt="" className='h-full block object-cover' />
                </div>
    
                <div className="description flex flex-col items-start justify-center flex-[5]">
                    <span className='font-[600]'>{e.name}</span>
                    <span>${e.price}</span>
                </div>
    
                <button className='self-center' onClick={() => handleRemoveItem(index)}><FontAwesomeIcon icon={faMinus} /></button>
            </div>
        );
    });

    return (
        <section id="checkout-wrapper" className="w-full flex justify-center px-[4rem] md:px-[1rem] py-[1rem] mt-[5rem]">

            <div id="checkout-section" className={`${sectionWidth} w-full flex flex-col items-center`}>

                {checkedOut === false ? <div id="checkout-container" className="h-full max-w-[600px] w-full p-4 flex flex-col gap-[1rem] justify-start">

                    <header id='items' className="bg-white rounded-md flex-[2]">
                        <h2 className="font-[700] text-[2rem] p-4">{cartArray.length > 0 ? `Your Items (${cartArray.length})` : `You have no items`}</h2>

                        <div id="cart-items" className="h-[350px] overflow-y-scroll rounded-md">
                            {cartItems}
                        </div>
                    </header>

                    <footer className="flex-1">

                        <section id='pay' className="flex flex-col gap-[.5rem] bg-white rounded-md p-4">
                            <div>Subtotal: ${getTotal()}</div>
                            <div>Tax: ${getTax()}</div>
                            <div className="font-[500] text-[1.2rem]">Total: ${(getTotal() * 1.06).toFixed(2)}</div>
                        </section>

                        <button id='apple' className="w-full bg-black text-white mt-[1rem] py-[.5rem] px-[1rem] rounded-md hover:translate-y-1 transition-all" onClick={() => {
                            if (getTotal() > 0) {
                                setCheckedOut(prev => !prev)
                                clearArray()
                            }

                        }}>Pay</button>
                    </footer>
                </div>
                    :
                    <div className="flex flex-col items-center gap-4 bg-transparent p-4 max-w-[600px] w-full rounded h-screen">
                        <h2 className="font-bold text-green-600 text-[2rem]">Thanks For Purchasing!</h2>

                        <div className="flex gap-4">
                            <Link to='/'><button className="bg-accent text-white font-bold px-[1rem] py-[.5rem] rounded-full">Home</button></Link>
                            <Link to='/shop'><button className="bg-primary text-white font-bold px-[1rem] py-[.5rem] rounded-full">Shop</button></Link>
                        </div>
                    </div>}
            </div>
        </section>
    )
}

export default Checkout