import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Navbar.css'

const CartIcon = () => {
    const { cart } = useCart(); 


    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart className='icon-shooping-cart'/>
            <span>{totalItems}</span>
            </Link>
        </div>
    );
};

export default CartIcon;
