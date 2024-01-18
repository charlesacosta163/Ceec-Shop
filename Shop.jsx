import { sectionHeader, sectionWidth, showBorder } from "../styles"
import { useEffect, useState, useContext } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

// Context Stuff
import { CartContext } from "../App"

const Shop = () => {

    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('electronics');

    const { handleAddCart } = useContext(CartContext)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])

    const filteredProducts = products.filter(e => e.category.includes(selectedCategory))

    const allProducts = filteredProducts.map((e) => {
        const maxDescriptionChars = 100;
        const truncatedDescription = e.description.length > maxDescriptionChars
            ? `${e.description.substring(0, maxDescriptionChars)}...`
            : e.description;

        return (
            <div key={e.id} className={`p-[1rem] rounded bg-white w-[300px] flex flex-col justify-between gap-[1rem] shadow`}>
                <div className="self-center">
                    <img key={e.id} src={e.image} alt="" width='100' height='100' />
                </div>
                <h3 className="font-bold text-[1.25rem]">{e.title}</h3>
                <p className="description">
                    <i>{truncatedDescription}</i>
                </p>

                <div className="flex justify-between items-center">
                    <button id='additem' className="px-[1rem] py-[.5rem] font-bold text-white bg-accent rounded" onClick={() => {
                        handleAddCart(e.id, e.title, e.price, e.image)
                    }}>
                        Add to Cart
                    </button>

                    <span className="font-[500]">${e.price}</span>
                </div>
            </div>
        );
    });

    return (

        <section id='shop-wrapper' className="w-full flex justify-center px-[1rem] py-[2rem]">
            <section id="shop-section" className="flex flex-col items-center mt-[4rem]">
                <h2 className={`${sectionHeader} text-center`}>Our Products</h2>

                <div className="flex gap-[1rem] transition-all">
                    <button
                        onClick={() => setSelectedCategory('clothing')}
                        className={`px-[1rem] py-[.5rem] border-2 ${selectedCategory === 'clothing' ? 'bg-accent text-white' : 'border-accent text-accent'} rounded-full`}
                    >
                        Clothing
                    </button>
                    <button
                        onClick={() => setSelectedCategory('electronics')}
                        className={`px-[1rem] py-[.5rem] border-2 ${selectedCategory === 'electronics' ? 'bg-accent text-white' : 'border-accent text-accent'} rounded-full`}
                    >
                        Electronics
                    </button>
                    <button
                        onClick={() => setSelectedCategory('jewelery')}
                        className={`px-[1rem] py-[.5rem] border-2 ${selectedCategory === 'jewelery' ? 'bg-accent text-white' : 'border-accent text-accent'} rounded-full`}
                    >
                        Jewelry
                    </button>
                </div>

                <div className="flex gap-4 flex-wrap justify-center mt-[2rem]">
                    {allProducts}
                </div>

            </section>

        </section>

    )
}

export default Shop