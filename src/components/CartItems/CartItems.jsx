import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart-slice'

function CartItems({ name, price, totalPrice, quantity, img }) {

    const dispatch = useDispatch()

    const increment = () => {
        dispatch(cartActions.addToCart({
            name: name,
            price: price,
            quantity: 1,
            image: img
        }))
    }

    const decrement = () => {
        dispatch(cartActions.removeFromCart({
            image: img
        }))
    }
    return (
        <div className='cartItems'>
            <img src={img} />
            <p>{name}</p>
            <p>price : {price}</p>
            <p>total price : {totalPrice}</p>
            <p>x{quantity}</p>
            <div className='buttonDiv'>
                <button onClick={increment} className='btn'>+</button>
                <button onClick={decrement} className='btn'>-</button>
            </div>
        </div>
    )
}

export default CartItems
