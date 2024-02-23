import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github.svg";
import "./App.css";
const linkedinURL = "https://www.linkedin.com/in/emilio-morales-798b7522b/";
const githubURL = "https://github.com/Elmster401";

function App() {
    return (
        <>
            <h1>Emilio Morales</h1>
            <h2>Computer Science Student</h2>
            <h3>Virginia Tech 2021-2025</h3>
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

export default App;
