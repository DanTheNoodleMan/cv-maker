import "/src/styles/generalInfo.css";
import { useState } from "react";
import { useRef } from 'react';

import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function GeneralInfo() {
    const [values, setValues] = useState({
        name: "",
        role: "",
        photo: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/upload-512.png",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
    });
    const [active, setActive] = useState(false);

    //useRef is a React Hook that lets you reference a value that’s not needed for rendering. In this case, we’re using it to reference the file input element.
    const fileInputRef = useRef(null); 

    const handleFocus = () => {
        setActive(true);
    };

    const handleBlur = () => {
        setActive(false);
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        event.target.style.color = "black";
    }

    function imageChange(event) {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setValues((prevValues) => ({
                ...prevValues,
                photo: reader.result,
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const handleProfileImageClick = () => {
        // Programmatically trigger the file input when the profile image is clicked
        fileInputRef.current.click();
    };

    return (
        <>
            <div
                className={`generalInfo ${active ? "focused" : ""}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                <div className="name">
                    <input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Name"
                        style={{ fontSize: "36px", fontWeight: "bold" }}
                    ></input>
                </div>
                <div className="role">
                    <input
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                        placeholder="Professional Title"
                        style={{ fontSize: "18px", fontWeight: "600" }}
                    ></input>
                </div>
                <div className="photo" onClick={handleProfileImageClick}>
                    <input
                        ref={fileInputRef}
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={imageChange}
                        style={{ display: "none" }} // Hide the default file input
                    />
                    <div className="profile-image">
                        <img src={values.photo} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                    </div>
                </div>
                <div className="sub-details">
                    <div className="email">
                        {values.email !== "" && <GrMail />}
                        <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                            type="email"
                        ></input>
                    </div>
                    <div className="phone">
                        {values.phone !== "" && <FaPhone />}
                        <input
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            type="tel"
                        ></input>
                    </div>
                    <div className="address">
                        {values.address !== "" && <MdLocationOn />}
                        <input
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            placeholder="Address"
                        ></input>
                    </div>
                    <div className="linkedin">
                        {values.linkedin !== "" && <FaLinkedin />}
                        <input
                            name="linkedin"
                            value={values.linkedin}
                            onChange={handleChange}
                            placeholder="LinkedIn"
                        ></input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GeneralInfo;
