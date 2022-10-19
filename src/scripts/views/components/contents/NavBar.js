import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <Link to="/">
                    <li>
                        <i className="material-icons">home</i>
                        <p>Beranda</p>
                    </li>
                </Link>
                <Link to="/chef">
                    <li>
                        <i className="material-icons">restaurant</i>
                        <p>Pemasak</p>
                    </li>
                </Link>
                <Link to="/saved">
                    <li>
                        <i className="material-icons">bookmark</i>
                        <p>Disimpan</p>
                    </li>
                </Link>
                <Link to="/order">
                    <li>
                        <i className="material-icons">assignment</i>
                        <p>Pesanan</p>
                    </li>
                </Link>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}

export default NavBar;
