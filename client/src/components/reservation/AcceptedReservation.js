import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAccepted} from '../../JS/actions/reservation'

function AcceptedReservation({road_id}) {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.reservationReducer.loadRes)
    const acceptedRequests = useSelector(state => state.reservationReducer.acceptedRequests)
    const user_id = localStorage.getItem('user')
    useEffect(() => {
        dispatch(getAccepted(user_id,road_id))
    }, [dispatch])
    return (
        <>
            {loading ? null : 
            acceptedRequests.map(el=> 
            <div>
                <p>{el.customer.lastname} {el.customer.firstname}</p>
            </div>)}
        </>
    )
}

export default AcceptedReservation
