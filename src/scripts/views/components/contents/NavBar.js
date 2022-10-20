import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <nav>
            <ul>
                <Link to="/">
                    <li>
                        <span class="material-symbols-rounded">
                            home
                        </span>
                        <p>Beranda</p>
                    </li>
                </Link>
                <Link to="/chef">
                    <li>
                        <span class="material-symbols-rounded">
                            breakfast_dining
                        </span>
                        <p>Pemasak</p>
                    </li>
                </Link>
                <Link to="/saved">
                    <li>
                    <span class="material-symbols-rounded">
                        favorite
                    </span>
                        <p>Disimpan</p>
                    </li>
                </Link>
                <Link to="/order">
                    <li>
                        <span class="material-symbols-rounded">
                            assignment
                        </span>
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
