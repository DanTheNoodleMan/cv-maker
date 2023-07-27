import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./CV.css";
import GeneralInfo from "/src/components/GeneralInfo.jsx";
import Summary from "/src/components/Summary.jsx";

function CV() {
    return (
        <>
            <div className="cv">
                <GeneralInfo />
                <Summary />
            </div>
        </>
    );
}

export default CV;
