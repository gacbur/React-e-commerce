import React, { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


const Nav = () => {

    const { cart } = useContext(GlobalContext)

    const CART_COUNTER_STYLES = {
        padding: ".2em .5em",
        backgroundColor: "#82a795",
        borderRadius: "50em",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart <span style={cart.length === 0 ? null : CART_COUNTER_STYLES}>{cart.length === 0 ? null : cart.length}</span></Link>
                </li>
                <li>
                    <Link to="/admin_panel">Admin Panel</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;