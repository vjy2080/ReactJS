import React from 'react';
import { useSelector } from 'react-redux';
import { getItemsSelector } from '../redux/slices/cartSlice';
import { Badge } from "react-bootstrap";



const Cart = () => {
    const items = useSelector(getItemsSelector);
    const total = items.reduce((a, b) => (a + b.price), 0)
    // console.log(items);
    let price = Math.round(total * 100) / 100
    return (
        <div className='text-light me-5'>
            <h5>
                <i className="fas fa-shopping-cart" />
                <Badge pill variant="danger">
                    {items.length}
                </Badge>
                &nbsp;&nbsp;
                <i class="fa-solid fa-sack-dollar"></i> {price}</h5>

        </div>
    );
}

export default Cart;
