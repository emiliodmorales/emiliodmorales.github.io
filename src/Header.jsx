{
    /* Defines the header of every page
Copyright (C) 2024  Emilio Morales

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */
}

import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <a href="/">
                <h2 className="name">Emilio Morales</h2>
            </a>
            <ul>
                <li>
                    <a href="/" className="link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="link">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="link">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/" className="link">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
