import React, { useState } from 'react'
import { useParams } from 'react-router'
import bestSellerDataset from '../../datasets/bestSellerDataset'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart-slice'
import careToolsDataset from '../../datasets/careToolsDataset'
import accsessoriesDataset from '../../datasets/accsessoriesDataset'

function Info() {
    const { id } = useParams()
    const { category } = useParams()
    console.log(category);
    const number = id.slice(1)
    const dispatch = useDispatch()
    let dataset;

    if (category == "best") {
        dataset = bestSellerDataset;
    } else if (category == "care") {
        dataset = careToolsDataset;
    } else if (category == "accessories") {
        dataset = accsessoriesDataset;
    }

    const addToCart = () => {
        dispatch(cartActions.addToCart({
            name: dataset[number - 1].name,
            id: dataset[number - 1].id,
            price: dataset[number - 1].price,
            quantity: 1,
            image: dataset[number - 1].image
        }))
    }
    return (
        <div className='Info'>
            <img src={dataset[number - 1].image} />
            <div className='content'>
                <h1>{dataset[number - 1].name}</h1>
                <button onClick={addToCart} className='btn'>Add to cart</button>
            </div>
        </div>
    )
}

export default Info
