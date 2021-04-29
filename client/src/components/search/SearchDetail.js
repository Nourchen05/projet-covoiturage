import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getroad } from '../../JS/actions/road'
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import Image from '../../assets/images/profile.png'
import './searchDetails.css'



function SearchDetail({ data }) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.roadReducer.loadRoad)
    return (
        <>
            {loading ? null :
                <Link to={`/road/${data._id}`} className="search_link" onClick={() => dispatch(getroad(data._id))}>
                    <div className="search_detail">
                        <div className="search_detail_top">
                            <div className="search_destination">
                                <div className="search_destination_details">
                                    <p>08:00</p>
                                    <div className="step">
                                        <div className="v-stepper">
                                            <div className="circle"></div>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                    <p>{data.departure}</p>
                                </div>
                                <div className="search_destination_details">
                                    <p>10:00</p>
                                    <div className="step">
                                        <div className="v-stepper">
                                            <div className="circle_bottom"></div>
                                            <div className="line_bottom"></div>
                                        </div>
                                    </div>
                                    <p>{data.arrive}</p>
                                </div>
                            </div>
                            <div className="search_price">
                                <p>{data.price},00 Dt</p>
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="search_detail_bottom">
                            <div className="road_driver">
                                <div className="road_driver_image">
                                    {data.user.picture ? 
                                    <img src={`/images/${data.user.picture}`} alt="profil" />:
                                    <img src={Image} alt="profil" />
                                }
                                </div>
                                <div className="road_driver_details">
                                    <h4>{data.user.firstname} {data.user.lastname}</h4>
                                    <p><BsStarFill style={{ color: "gold" }} /> 4.6</p>
                                </div>

                            </div>
                            <div className="search_places_icons">
                                {/* <MdAirlineSeatReclineNormal className="seat_icon" />
                            <MdAirlineSeatReclineNormal className="seat_icon" />
                            <MdAirlineSeatReclineNormal className="seat_icon" />
                            <MdAirlineSeatReclineNormal className="seat_icon" /> */}
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </>
    )
}

export default SearchDetail
