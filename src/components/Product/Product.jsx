import React from 'react'
import { Link } from 'react-router-dom'

function Product({ img, name, price, id, category }) {
    return (
        <div>
            <div>
                <img src={img} />
                <h4>{name}</h4>
                <h5>$ {price}.00</h5>
                <Link to={`/${category}/:${id}`}>
                    <button className='btn'> buy </button>
                </Link>
            </div>
        </div>
    )
}

export default Product
