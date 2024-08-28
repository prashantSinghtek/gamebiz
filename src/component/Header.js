import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="main-header">
            <header>
                <div>
                    <img className="w-100" src="./img/Group 2.png" alt="Header Background" />
                </div>
                <div className="container">
                    <div className="header-wrapper">
                        <Link to="/">
                            <img className="header-logo" src="./img/gamebiz 1.png" alt="Logo" />
                        </Link>
                        <div>
                            <Link to="/contact">
                                <button className="Contactbtn">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;

