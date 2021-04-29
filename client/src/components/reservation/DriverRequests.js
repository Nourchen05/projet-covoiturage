import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDriverRequests, driverAcceptRequest, driverRejectRequest } from '../../JS/actions/reservation'

function DriverRequests() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.reservationReducer.loadRes)
    const driverRequests = useSelector(state => state.reservationReducer.driverRequests)
    const user_id = localStorage.getItem('user')
    useEffect(() => {
        dispatch(getDriverRequests(user_id))
    }, [dispatch])
    return (
        <>
            {loading ? null :
                driverRequests.map(el =>
                    // <div>
                    //     <p>{el.customer.firstname} {el.customer.lastname}</p>
                    //     <p>{el.customer.gender}</p>
                    //     <p>{el.customer.email}</p>
                    //     <button type='submit' className="btn"
                    //         onClick={(e) => {
                    //             e.preventDefault();
                    //             dispatch(driverAcceptRequest(el._id, user_id))
                    //         }}>Accepter </button>
                    //     <button type='submit' className="btn"
                    //         onClick={(e) => {
                    //             e.preventDefault();
                    //             dispatch(driverRejectRequest(el._id, user_id))
                    //         }}>Igniorer</button>
                    // </div>
                    <div className="request" key={el._id}>
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
                        <div>
                            <h3>Passager :</h3>
                            <p>name : {el.customer.firstname} {el.customer.lastname}</p>
                        </div>
                        <button type='submit' className="btn"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(driverAcceptRequest(el._id, user_id))
                            }}>Accepter </button>
                        <button type='submit' className="btn"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(driverRejectRequest(el._id, user_id))
                            }}>Igniorer</button>
                    </div>
                )
            }
        </>
    )
}

export default DriverRequests
