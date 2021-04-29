import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function Preference() {
    const [preference, setPreference] = useState(false)
    return (
        <>
            <div className="userprofil_header" onClick={() => setPreference(!preference)}>
                <p>Préférences Voyage </p>
                {preference ? <BsChevronUp className="userprofil_icon" /> :
                    <BsChevronDown className="userprofil_icon" />}
            </div>
            {preference ?
                <form>
                    musique :
                    <input type="radio" placeholder="loud and clear" />
                    <input type="radio" />
                    cigarette :
                    <input type="radio" />
                </form>
                : null}
        </>
    )
}

export default Preference
