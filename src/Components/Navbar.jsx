import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import CartIcon from './CartIcon';
import './Navbar.css';

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!search) {
            return;
        }

        else {
            navigate(`/search?q=${search}`);
        }
        
        setSearch("");
    }

    return (
        <div className="container">
            <nav id='navbar' className='navbar'>
                <h2 className='navbar-brand'>
                    <Link to="/" className='navbar-link'>
                        ComicsLib
                    </Link>
                </h2>
                <form className='navbar-form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='navbar-input'
                        onChange={handleChange}
                        value={search}
                        placeholder='Busque uma história'
                    />
                    <button type='submit' className='navbar-button'><FiSearch /></button>
                </form>
                <CartIcon className='navbar-cart-icon' />
            </nav>
        </div>
    )
}

export default Navbar;
