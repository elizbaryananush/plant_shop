import React from 'react'
import bestSellerDataset from '../../datasets/bestSellerDataset'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

function List() {
    return (
        <div className='List' id='plants'>
            <div className='wrapper2'>
                {bestSellerDataset.map((elements, index) => (
                    (index <= 5) ? <Product category="best" img={bestSellerDataset[index].image} name={bestSellerDataset[index].name} price={bestSellerDataset[index].price}  id={bestSellerDataset[index].id} /> : null
                ))}
            </div>
            <Link to='/tabs'>
                <button style={{ width: 200 }} className='btn more'>MORE</button>
            </Link>
        </div>
    )
}

export default List
