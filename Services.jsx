import { sectionHeader, sectionWidth, showBorder } from "../styles"
import { serviceInfo } from "../constants/info-services"

const Services = () => {

    const serviceCards = serviceInfo.map(el => {
        return (
            <div key={el.id} id='service-card' className={`shadow flex flex-col items-center max-w-[300px] rounded pt-[3rem] bg-bgCardColor`}>
                <div id='image' className="w-[200px] h-[200px] flex">
                    <img src={el.image} alt="" />
                </div>

                <div id="description" className="py-[2rem] px-[1rem]">
                    <h2 className="font-bold text-[1.5rem] text-center pb-[1rem]">{el.title}</h2>
                    <p>{el.description}</p>
                </div>
            </div>
        )
    })
    return (
        <section id="services-section" className={`${sectionWidth} w-full text-green-900`}>

            <h1 className={`${sectionHeader} text-center`}>What we Offer</h1>

            <div id='service-grid' className="flex flex-wrap justify-center mt-[2rem] gap-[2rem]">
                {serviceCards}
            </div>
        </section>
    )
}

export default Services