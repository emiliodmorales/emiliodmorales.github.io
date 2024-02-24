{
    /* Defines the footer for every page
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

import "./Footer.css";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import emailLogo from "./assets/email.svg";
const linkedinURL = "https://www.linkedin.com/in/emilio-morales-798b7522b/";
const githubURL = "https://github.com/Elmster401";
const email = "emorales@vt.edu";

function Footer() {
    return (
        <div class="Footer">
            <div>
                <a href={linkedinURL} target="_blank">
                    <img
                        src={linkedinLogo}
                        class="logo"
                        alt="LinkedId Profile"
                    />
                </a>
                <a href={githubURL} target="_blank">
                    <img src={githubLogo} class="logo" alt="Github Profile" />
                </a>
                <a href={"mailto:" + email} target="_blank">
                    <img src={emailLogo} class="logo" alt="Contact me!" />
                </a>
            </div>
            <p class="read-the-docs">Emilio Morales 2024</p>
        </div>
    );
}

export default Footer;
