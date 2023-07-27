import "/src/styles/experience.css";
import { useState } from "react";
import { useRef } from "react";

function Summary() {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => {
        setActive(true);
    };

    const handleBlur = () => {
        setActive(false);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
            <div className="experience">
                <form>
                    
                </form>
            </div>
    );
}

export default Summary;
