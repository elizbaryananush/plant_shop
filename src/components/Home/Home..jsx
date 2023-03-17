import React from 'react'
import home from '../../assets/images/plant.webp'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='Home flex'>
            <div className='imageDiv'>
                <img src={home} />
            </div>
            <div className='Context col-2'>
                <h1>Life is better with plants</h1>
                <p>During the winter, tropical indoor plants are at the mercy of drafty windows, drying furnaces, and colder temperatures. To help your indoor plants survive the cold winter months, follow these tips from Bloomscape’s own Grow-How® Team!</p>
                <Link to='/tabs'>
                    <button className='btn'>MORE</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
