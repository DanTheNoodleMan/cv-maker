import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./CV.css";
import GeneralInfo from "/src/components/generalInfo.jsx";

function CV() {
    return (
        <>
            <div className="cv">
                <GeneralInfo />
            </div>
        </>
    );
}

export default CV;
