import Hero from "./Hero"
import Services from "./Services"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

const Body = () => {
    return (
        <>
            <section id="hero-wrapper" className="w-full h-[100svh] flex justify-center px-[4rem] md:px-[1rem] py-[2rem]">
                <Hero />
            </section>

            <section id='services-wrapper' className="w-full flex justify-center px-[1rem] py-[4rem]">
                <Services />
            </section>

            <section id="newsletter-wrapper" className="w-full flex justify-center px-[1rem] py-[4rem]">
                <Newsletter />
            </section>

        </>
    )
}

export default Body