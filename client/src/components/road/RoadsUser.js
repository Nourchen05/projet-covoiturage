import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoads } from '../../JS/actions/road'
import Passagers from '../reservation/AcceptedReservation'
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import './roadUser.css'


function RoadsUser() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.roadReducer.loadRoad)
    const roads = useSelector(state => state.roadReducer.roads)
    const user_id = localStorage.getItem('user')
    useEffect(() => {
        dispatch(getRoads(user_id))
    }, [dispatch])
    return (
        <>
            {loading ? null :
                roads.map(el =>
                    <div key={el._id} className="road_user">
                        <div>
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
                                        <p>{el.departure}</p>
                                    </div>
                                    <div className="search_destination_details">
                                        <p>10:00</p>
                                        <div className="step">
                                            <div className="v-stepper">
                                                <div className="circle_bottom"></div>
                                                <div className="line_bottom"></div>
                                            </div>
                                        </div>
                                        <p>{el.arrive}</p>
                                    </div>

                                </div>
                                <div className="search_price">
                                    <p>{el.price},00 Dt</p>
                                </div>
                            </div>
                            <div className="search_detail_bottom">
                                <div className="road_driver">
                                    <p>Les places diponibles :</p>
                                </div>
                                <div className="search_places_icons">
                                    <MdAirlineSeatReclineNormal className="seat_icon" />
                                </div>
                            </div>
                        </div>
                        <div className="road_passenger">
                            <h3>les passagers</h3>
                            <Passagers road_id={el._id} />
                        </div>
                    </div>
                )

            }
        </>
    )
}

export default RoadsUser
