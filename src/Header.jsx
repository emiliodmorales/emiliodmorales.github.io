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
        <header class="header">
            <div class="title">
                <a href="./">Emilio Morales</a>
            </div>
            <nav class="navbar">
                <ul>
                    <li>
                        <a href="./" class="link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="./About" class="link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="./Projects" class="link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="./Contact" class="link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
