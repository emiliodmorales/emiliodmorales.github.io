{
    /* Sets up the main page of the site
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

import "./App.css";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import emailLogo from "./assets/email.svg";
const linkedinURL = "https://www.linkedin.com/in/emilio-morales-798b7522b/";
const githubURL = "https://github.com/emiliodmorales";
const email = "emorales@vt.edu";

function App() {
    return (
        <>
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
            <h2>Computer Science Student</h2>
            <h3>Virginia Tech 2021-2025</h3>
            <div class="footer">
                <div>
                    <a href={linkedinURL} target="_blank">
                        <img
                            src={linkedinLogo}
                            class="logo"
                            alt="LinkedId Profile"
                        />
                    </a>
                    <a href={githubURL} target="_blank">
                        <img
                            src={githubLogo}
                            class="logo"
                            alt="Github Profile"
                        />
                    </a>
                    <a href={"mailto:" + email} target="_blank">
                        <img src={emailLogo} class="logo" alt="Contact me!" />
                    </a>
                </div>
                <p class="read-the-docs">Emilio Morales 2024</p>
            </div>
        </>
    );
}

export default App;
