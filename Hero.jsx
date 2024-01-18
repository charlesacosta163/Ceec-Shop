import { sectionWidth, showBorder } from "../styles"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
    <section id = 'hero-section' className= {`sm:flex-col-reverse ${sectionWidth} sm:m-[-1rem] sm:justify-start w-full flex justify-between items-center`}>
        
        <div id="hero-text" className={`max-w-[60ch] flex flex-col gap-[.5rem]`}>

            <div className="flex items-center font-extrabold rounded-full px-[1rem] py-[.5rem] sm:px-[.75rem] sm:py-[.375rem] bg-[#802c6e] self-start text-white sm:text-[.75rem]"><span className = 'mr-[.5rem]'><img src="https://fakestoreapi.com/icons/logo.png" width = '25' alt="" /></span>Powered by FakeStore API</div>
            <h1 className="md:text-[2.25rem] font-extrabold text-[3.5rem] text-green-700">The Shop Is On, Your Time Is Now</h1>
            <p className="text-[1.2rem] text-green-900 sm:text-[1rem]">Explore our new products with ease and comfort</p>

            <div className="button mt-4">
                <Link to='/shop'><button id='shopnow' className="bg-primary px-[2rem] py-[1rem] font-extrabold text-white text-[1.2rem] rounded sm:text-[1rem] sm:px-[1.2rem] sm:py-[.6rem]">Shop Now</button></Link>
            </div>
        </div>

        <div id="hero-image" className={``}>
            <div><img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/selected_box_09k4.svg" width = '400' alt="" className="sm:w-[250px] sm:h-[250px]"/></div>
        </div>
    </section>
    )
}

export default Hero