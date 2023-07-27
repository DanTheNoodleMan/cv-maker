import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./CV.css";
import GeneralInfo from "/src/components/GeneralInfo.jsx";
import Summary from "/src/components/Summary.jsx";
import Experience from "/src/components/Experience.jsx";

function CV() {
    return (
        <>
            <div className="cv">
                <GeneralInfo />
                <div className="summary">
                    <h3 className="title">Summary</h3>
                    <hr className="divider" />
                    <Summary />
                </div>
                <div className="experience">
                    <h3 className="title">Experience</h3>
                    <hr className="divider" />
                    <Experience />
                </div>
            </div>
        </>
    );
}

export default CV;
