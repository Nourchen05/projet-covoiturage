import React from 'react'
import Image from '../../../assets/images/profile.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserId } from '../../../JS/actions/user'
import {getMessages} from '../../../JS/actions/message'
import { BiMessageRounded } from "react-icons/bi"
import { Link } from 'react-router-dom'
import './roadDriver.css'


function RoadDiver({ road_id }) {
    const dispatch = useDispatch()
    const user_r = localStorage.getItem('user')
    return (
        <>
                <div className="road_id_driver">
                    <Link to={`/user/${road_id.user._id}`}
                        onClick={() => dispatch(getUserId(road_id.user._id))}
                        style={{ textDecoration: "none" }}
                    >
                        <div className="road_id_driver_details">
                            <h4>{road_id.user.firstname} {road_id.user.lastname}</h4>
                            <img src={Image} alt="profile" />
                        </div>
                    </Link>
                    <Link to={`/user/messages/${road_id.user._id}/${user_r}`}
                        onClick={()=> dispatch(getUserId(road_id.user._id))}
                        style={{ textDecoration: "none" }} >
                        <div className="road_id_driver_message">
                            <BiMessageRounded className="message_icon" />
                            <p>Contacter {road_id.user.firstname} {road_id.user.lastname}</p>
                        </div>
                    </Link>
                </div >
        </>
    )
}

export default RoadDiver
