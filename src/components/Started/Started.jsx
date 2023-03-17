import React, { useState } from 'react'
import image from '../../assets/images/result.jpg'

function Started() {
    const [show, setShow] = useState(false)

    const showw = () => {
        if (show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (
        <div className='Started'>
            <div className='container' id='container'>
                <div className="form-box" >
                    <div className='page1'>
                        <h1>Lets see what kind of plants you like</h1>
                        <h4>Click down below</h4>
                        <button onClick={() => {
                            document.querySelector('.form-box').scrollLeft += document.querySelector('.page1').getBoundingClientRect().width
                        }} className='btn3'>Get Started</button>
                    </div>
                    <div className="page2">

                        <h1>Choose plant type</h1>
                        <form action="chidem">
                            <label className='checkbox'>
                                <input type="checkbox" />Flower Plants
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" /> Outdoor Plants
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Cactuses
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Palms
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Indoor Plants
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Tree Type Plants
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Unusual Plants
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Office Plants
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Living Stone Plants
                                <span></span>
                            </label>
                        </form>
                        <button onClick={() => {
                            document.querySelector('.form-box').scrollLeft += document.querySelector('.page1').getBoundingClientRect().width
                        }} className='btn3'>Next</button>
                    </div>
                    <div className="page3">

                        <h2>Let's talk about color. Do you want a colorful plant or something that flowers?</h2>
                        <form action="chidem">
                            <label className='checkbox'>
                                <input type="checkbox" />The more color
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" /> I don't really mind
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />No!
                                <span></span>
                            </label>
                        </form>
                        <button onClick={() => {
                            document.querySelector('.form-box').scrollLeft += document.querySelector('.page1').getBoundingClientRect().width
                        }} className='btn3'>Next</button>
                    </div>
                    <div className="page3">

                        <h2>Do you have cats or dogs that might chew on the plant?</h2>
                        <form action="chidem">
                            <label className='checkbox'>
                                <input type="checkbox" />No cats or dogs
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Yes, my cat/dog might chew on my plant
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />They won't be able to reach the plant
                                <span></span>
                            </label>
                        </form>
                        <button onClick={() => {
                            document.querySelector('.form-box').scrollLeft += document.querySelector('.page1').getBoundingClientRect().width
                        }} className='btn3'>Next</button>
                    </div>
                    <div className="page3">

                        <h2>Personal question time... have you killed a plant before?</h2>
                        <form action="chidem">
                            <label className='checkbox'>
                                <input type="checkbox" />I'm a recovering plant serial-killer!
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />This will be my first houseplant!
                                <span></span>
                            </label>
                            <label className='checkbox'>
                                <input type="checkbox" />Nope, all my plants are doing great!
                                <span></span>
                            </label>
                        </form>
                        <button onClick={() => {
                            document.querySelector('.form-box').scrollLeft += document.querySelector('.page1').getBoundingClientRect().width
                        }} className='btn3'>Results</button>
                    </div>
                    <div className='page4'>
                        <h2>Your Final Result is</h2>
                        <h1>Bird of paradise</h1>
                        <img src={image} />
                        <div>
                            <p>for more information tap on the link</p>
                            <a href="https://en.wikipedia.org/wiki/Strelitzia_reginae#:~:text=Strelitzia%20reginae%2C%20commonly%20known%20as,it%20is%20a%20popular%20houseplant.">Strelitzia reginae</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Started