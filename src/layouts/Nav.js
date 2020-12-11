import React, { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/admin_panel">Admin Panel</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;