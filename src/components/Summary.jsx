import "/src/styles/summary.css";
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
        <>
            <div className="summary ">
                <form>
                    <textarea
                        className={`${active ? "focused" : ""}`}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={value}
                        onChange={handleChange}
                        name="summary"
                        rows={4}
                        cols={57}
                        placeholder="Summarize what makes you stand out!"
                    ></textarea>
                </form>
            </div>
        </>
    );
}

export default Summary;
