import React, { useState } from 'react'
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

function CarSection() {
    const [car, setCar] = useState(false)
    return (
        <>
            <div className="userprofil_header" onClick={() => setCar(!car)}>
                <p>Votre Véhicule</p>
                {car ? <BsChevronUp className="userprofil_icon" /> :
                    <BsChevronDown className="userprofil_icon" />}
            </div>
            {car ?
                <div>
                    <p>marque : Jeep</p>
                    <p>Modéle :Wragler</p>
                </div>
                : null}
        </>
    )
}

export default CarSection
