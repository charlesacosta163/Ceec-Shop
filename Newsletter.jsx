import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { sectionHeader, sectionWidth, showBorder } from "../styles"
import { useState } from 'react'

const Newsletter = () => {

    const [sub, setSub] = useState(false)
    const [email, setEmail] = useState('')

    return (
        <section id="newsletter-section" className={`flex justify-center w-full ${sectionWidth} text-center`}>

            <div id="newsletter" className={`sm:px-[1rem] p-[2rem] rounded shadow-2xl max-w-[800px] w-full`}>
                {sub ? <h2 className='text-[1.5rem] font-bold text-accent '>Thanks for subscribing!</h2> : <><h2 className="text-[1.5rem] font-bold text-accent ">Subscribe to our Newsletter</h2>
                <p className="opacity-[.5] text-[.9rem] font-[400]">Stay notified and updated with new products that we display regularly</p>

                <div className="flex gap-[.5rem] mt-[1rem]">
                    <input type="text" placeholder="Enter your email" className="sm:block flex-[5] rounded-full px-[1rem] py-[.5rem] border-none outline-none bg-white" onChange = {e => setEmail(e.target.value)} required/>
                    <button onClick={() => {
                        if (email === '') {}
                        else {setSub(prev => !prev)}
                    }} className="flex-0 rounded-full px-[1rem] py-[.5rem] bg-accent text-white"><FontAwesomeIcon icon = {faPaperPlane} /></button>
                </div></>}
            </div>

        </section>
    )
}

export default Newsletter