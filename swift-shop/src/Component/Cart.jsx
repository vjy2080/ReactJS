import React from 'react';
import { useSelector } from 'react-redux';
import { getItemsSelector } from '../redux/slices/cartSlice';


const Cart = () => {
    const items = useSelector(getItemsSelector);
    const total = items.reduce((a, b) => (a + b.price), 0)
    // console.log(items);
    return (
        <div className='text-light'>
            <h5>Cart Items :{items.length} &nbsp;&nbsp; Cart Value {"$" + total + "."}</h5>
        </div>
    );
}

export default Cart;
