import React, { useState } from 'react'
import DriverRequests from './DriverRequests'
import CustomerRequests from './CustomerRequests'
import RoadsUser from '../road/RoadsUser'
import './reservation.css'

function Reservation() {
    const [road, setRoad] = useState(true)
    const [dri, setDri] = useState(false)
    const [cus, setCus] = useState(false)
    const handleRoad =()=> {
        setRoad(true)
        setDri(false)
        setCus(false)
    }
    const handleDriver=()=> {
        setRoad(false)
        setDri(true)
        setCus(false)
    }
    const handleCustomer=()=> {
        setRoad(false)
        setDri(false)
        setCus(true)
    }
    return (
        <div className="reservation">
            <div className="reservation_header">
                <p onClick={handleRoad} className={road?"p_clicked":""}>Vos trajets</p>
                <p onClick={handleDriver} className={dri?"p_clicked":""}>Les réservations</p>
                <p onClick={handleCustomer} className={cus?"p_clicked":""}>Vos demandes</p>
            </div>
            {road ? 
            <RoadsUser /> : null }
            {dri ? 
            <DriverRequests /> :null }
            {cus ? 
            <CustomerRequests /> :null }
        </div>
    )
}

export default Reservation
