import "/src/styles/generalInfo.css";
import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function GeneralInfo() {
    const [values, setValues] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        event.target.style.color = "black";
    }

    return (
        <>
            <div className="generalInfo">
                <div className="name">
                    <input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={{ fontSize: "36px", fontWeight: "bold" }}
                    ></input>
                </div>
                <div className="role">
                    <input
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                        placeholder="Software Engineer"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                    ></input>
                </div>
                <div className="sub-details">
                    <div className="email">
                        {values.email !== "" && <GrMail />}
                        <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="TheBoy@gmail.com"
                            type="email"
                        ></input>
                    </div>
                    <div className="phone">
                        {values.phone !== "" && <FaPhone />}
                        <input
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="555-555-5555"
                            type="tel"
                        ></input>
                    </div>
                    <div className="address">
                        {values.address !== "" && <MdLocationOn />}
                        <input
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            placeholder="1234 Main St, City, State, 12345"
                        ></input>
                    </div>
                    <div className="linkedin">
                        {values.linkedin !== "" && <FaLinkedin />}
                        <input
                            name="linkedin"
                            value={values.linkedin}
                            onChange={handleChange}
                            placeholder="linkedin.com/in/TheBoy"
                        ></input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GeneralInfo;
