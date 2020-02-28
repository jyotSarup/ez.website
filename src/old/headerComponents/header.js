import React from 'react';
import {
    Link
} from 'react-router-dom';


function Header() {
    return (
        <header>

            <div className="logo">
                LOGO
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/Services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/Price">PRICE</Link>
                    </li>
                    <li>
                        <Link to="/Team">TEAM</Link>
                    </li>
                    <li>
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>


            <div className="loginBtn">
                LOG IN
            </div>

        </header>
    );
}

export default Header;
