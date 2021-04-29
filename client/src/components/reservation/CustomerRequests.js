import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerRequests, driverRejectRequest } from '../../JS/actions/reservation'
import { MdAirlineSeatReclineNormal } from "react-icons/md";

function CustomerRequests() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.reservationReducer.loadRes)
    const customerRequests = useSelector(state => state.reservationReducer.customerRequests)
    const user_id = localStorage.getItem('user')
    useEffect(() => {
        dispatch(getCustomerRequests(user_id))
    }, [dispatch])
    return (
        <>
            {loading ? null :
                customerRequests.map(el =>
                    <div  className="request" key={el._id}>
                        <div>
                            <div >
                                <div className="search_destination_details">
                                    <p>08:00</p>
                                    <div className="step">
                                        <div className="v-stepper">
                                            <div className="circle"></div>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                    <p>{el.road.departure}</p>
                                </div>
                                <div className="search_destination_details">
                                    <p>10:00</p>
                                    <div className="step">
                                        <div className="v-stepper">
                                            <div className="circle_bottom"></div>
                                            <div className="line_bottom"></div>
                                        </div>
                                    </div>
                                    <p>{el.road.arrive}</p>
                                </div>
                            </div>
                        </div>
                        <div className="search_detail_bottom">
                            <p>status : {el.accepted ? "accepted" : "en cours"}</p>
                            <button type="submit"  onClick={(e) => {
                                e.preventDefault();
                                dispatch(driverRejectRequest(el._id, user_id))
                            }}>Annuler</button>
                        </div>
                    </div>
                )}
        </>
    )
}

export default CustomerRequests
