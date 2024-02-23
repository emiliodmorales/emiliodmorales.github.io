import "./Footer.css";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
const linkedinURL = "https://www.linkedin.com/in/emilio-morales-798b7522b/";
const githubURL = "https://github.com/Elmster401";

function Footer() {
    return (
        <>
            <p className="read-the-docs">Check out my socials</p>
            <div>
                <a href={linkedinURL} target="_blank">
                    <img
                        src={linkedinLogo}
                        className="logo"
                        alt="LinkedId Profile"
                    />
                </a>
                <a href={githubURL} target="_blank">
                    <img
                        src={githubLogo}
                        className="logo"
                        alt="Github Profile"
                    />
                </a>
            </div>
        </>
    );
}

export default Footer;
