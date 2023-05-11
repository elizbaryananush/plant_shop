import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from '../CartItems/CartItems'

function Cart() {
    const listItems = useSelector(state => state.cart.listItems)
    if (listItems.length >= 1) {
        return (
            <div className='cart'>
                {
                    listItems.map((item) => (
                        <CartItems img={item.image} price={item.price} name={item.name} totalPrice={item.totalPrice} quantity={item.quantity} />
                    ))
                }
            </div>
        )
    } else {
        return (
            <div className='cart'>
                <h1 style={{color : 'grey'}}>Your basket is empty</h1>
            </div>
        )
    }

}

export default Cart
