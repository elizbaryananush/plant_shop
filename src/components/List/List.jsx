import React from 'react'
import bestSellerDataset from '../../datasets/bestSellerDataset'
import { Link } from 'react-router-dom'

function List() {


    return (
        <div className='List' id='plants'>
            <div className='wrapper2'>
                {bestSellerDataset.map((elements, index) => (
                    (index <= 5) ? <div> <img src={bestSellerDataset[index].image} /><h4>{bestSellerDataset[index].name}</h4><h5>{bestSellerDataset[index].price}</h5><button className='btn'> buy </button> </div> : console.log('sjhgkjdh')
                ))}
            </div>
            <Link to='/tabs'>
                <button style={{ width: 200 }} className='btn more'>MORE</button>
            </Link>
        </div>
    )
}

export default List
