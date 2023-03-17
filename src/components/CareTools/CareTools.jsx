import React from 'react'
import Background from '../../assets/images/tools2.jpg'
import { Link } from 'react-router-dom'

function CareTools() {
    return (
        <div className='CareTools' id='caretools'>
            <img src={Background} />
            <div>
                <h6>
                    Basic Plant Care: Understanding Your Plant’s Needs
                </h6>
                <h1>
                    Shop All Care
                </h1>
                <p>
                    Enjoy free standard shipping on all plants and planters. Orders are shipped via UPS carbon neutral shipping, keeping our carbon footprint as small as possible.
                    <br />Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every step. If your plant arrives damaged or unhealthy, we replace it for free.
                    Local Stores
                    Want hands-on plant expertise IRL? Stop by one of our stores in NYC, Bethesda, Boston, Chicago, LA, or San Francisco to explore more plants, planters, & care accessories.
                </p>
                <Link to='/tabs'>
                    <button className='btn3'>shop</button>
                </Link>
            </div>
        </div>
    )
}

export default CareTools
